# terraform delta visualize
Yet another terraform plan visualization tool

Inspired by [terraform-visual](https://github.com/hieven/terraform-visual) i've decided to create my own tool to visualize terraform plans.
I've implemented a few features that i've missed in terraform-visual:
- side by side diff of ressource changes
- larger screen for comparison
- easy display of delete -> create operation
- timestamp of plan creation

Unimplemented feature ideas:
- display of resource dependencies
- show all properties of plan

## Usage
Upload your Terraform plan to visualize it.

