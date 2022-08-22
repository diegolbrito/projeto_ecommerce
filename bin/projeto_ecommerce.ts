#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ProductAppStack } from "../lib/productsApp-stack";
import { ECommerceApiStack } from "../lib/ecommerceApi-stack";

const app = new cdk.App();

const env: cdk.Environment = {
  account: "211112452705",
  region: "us-east-1"
}

const tags = {
  const: "ECommerce",
  team: "mba",
}

const productsAppStack = new ProductAppStack(app, "ProductsAppStack", {
  tags: tags,
  env: env
})

const ecommerceApiStack = new ECommerceApiStack(app, "ECommerceApi", {
  productsFetchHandler: productsAppStack.productsFetchHandler,
  tags: tags
})

ecommerceApiStack.addDependency(productsAppStack)