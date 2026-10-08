terraform {
  required_version = ">= 1.6.0"
}

resource "aws_vpc" "main" {
  cidr_block = "10.40.0.0/16"
}

resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.40.0.0/24"
}

resource "aws_subnet" "private_a" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.40.10.0/24"
}

resource "aws_subnet" "private_b" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.40.11.0/24"
}

resource "aws_db_subnet_group" "data" {
  name       = "harborline-data"
  subnet_ids = [aws_subnet.private_a.id, aws_subnet.private_b.id]
}

resource "aws_security_group" "data" {
  name   = "harborline-data"
  vpc_id = aws_vpc.main.id
}

resource "aws_db_instance" "orders" {
  identifier             = "harborline-orders"
  engine                 = "postgres"
  instance_class         = "db.t4g.medium"
  db_subnet_group_name   = aws_db_subnet_group.data.name
  vpc_security_group_ids = [aws_security_group.data.id]
  allocated_storage      = 100
  skip_final_snapshot    = true
}

resource "aws_elasticache_subnet_group" "cache" {
  name       = "harborline-cache"
  subnet_ids = [aws_subnet.private_a.id, aws_subnet.private_b.id]
}

resource "aws_elasticache_cluster" "sessions" {
  cluster_id           = "harborline-sessions"
  engine               = "redis"
  node_type            = "cache.t4g.small"
  num_cache_nodes      = 1
  subnet_group_name    = aws_elasticache_subnet_group.cache.name
  security_group_ids   = [aws_security_group.data.id]
}

resource "aws_sqs_queue" "payments" {
  name = "harborline-payments"
}

resource "aws_sqs_queue" "shipments" {
  name = "harborline-shipments"
}

resource "aws_s3_bucket" "archive" {
  bucket = "harborline-archive-example"
}
