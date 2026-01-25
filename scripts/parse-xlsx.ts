// This script is for development reference only
// The xlsx file contains product data that needs to be parsed

import * as XLSX from 'xlsx';

// Expected columns based on user description:
// - Product Name
// - Variant
// - Description
// - SKU
// - Price

// Sample structure for products:
export interface Product {
  id: string;
  name: string;
  variant: string;
  description: string;
  sku: string;
  price: number;
  category: string;
  image?: string;
}
