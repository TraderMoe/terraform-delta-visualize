
terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.84.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "resource_group" {
  name     = "rg-terraform-delta-visualize"
  location = "westeurope"
}

resource "azurerm_virtual_network" "virtual_network" {
  name                = "vnet-terraform-delta-visualize"
  resource_group_name = azurerm_resource_group.resource_group.name
  location            = azurerm_resource_group.resource_group.location
  address_space       = ["172.16.0.0/12"]
}

resource "azurerm_subnet" "storage_subnet" {
  name                 = "subnet-terraform-delta-visualize-storage"
  resource_group_name  = azurerm_resource_group.resource_group.name
  virtual_network_name = azurerm_virtual_network.virtual_network.name
  address_prefixes     = ["172.16.0.0/24"]
}

resource "azurerm_subnet" "app_service_subnet" {
  name                 = "subnet-terraform-delta-visualize-app-service"
  resource_group_name  = azurerm_resource_group.resource_group.name
  virtual_network_name = azurerm_virtual_network.virtual_network.name
  address_prefixes     = ["172.16.1.0/24"]
}

resource "azurerm_subnet" "app_gateway_subnet" {
  name                 = "subnet-terraform-delta-visualize-app-gateway"
  resource_group_name  = azurerm_resource_group.resource_group.name
  virtual_network_name = azurerm_virtual_network.virtual_network.name
  address_prefixes     = ["172.16.255.0/24"]
}
