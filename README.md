# Terraform Delta Visualize
Yet another terraform plan visualization tool

## Introduction
Welcome to the Terraform Delta Visualize documentation! Terraform Delta Visualize is a powerful npm tool designed to display and interpret Terraform changes using the input of a plan in JSON format.

Inspired by [terraform-visual](https://github.com/hieven/terraform-visual) i've decided to create my own tool to visualize terraform plans.
I've implemented a few features that i've missed in terraform-visual:
- [x] side by side diff of ressource changes
- [x] larger screen for comparison
- [x] easy display of delete -> create operation
- [x] timestamp of plan creation
- [x] display all variables of plan

Unimplemented feature ideas:
- [ ] filter options for change resources
- [ ] summary of actions (counts)
- [ ] list of resource changes will be scrollable diff stays fixed
- [ ] display of resource dependencies
- [ ] CLI

## Usage
Upload your Terraform plan to visualize the changes.

[Try it!](https://tradermoe.github.io/terraform-delta-visualize/)
![Alt text](./docs/screenshot.png)

## Creating a Terraform Plan and Outputting to JSON
To generate a Terraform plan and save it in JSON format, follow these steps:

1. Navigate to your Terraform project directory.

2. Run the following command to generate a Terraform plan:

    ``` bash
    terraform plan -out=tfplan
    ```
    This command creates a plan file named tfplan.

3. Now, convert the plan to JSON using the following command:
    ``` bash
    terraform show -json tfplan > plan.json
    ```
    This command extracts and saves the plan details in plan.json.

## Features
1. **Change Visualization**:

    Effortlessly visualize Terraform plan changes in a human-readable format, providing insights into additions, modifications, and destructions.

2. **Detailed Information**:
    
    Access detailed information about each change, including resource types, names, and attributes affected by the Terraform plan.

3. **JSON Plan Support**:
    
    The tool seamlessly processes Terraform plan files in JSON format, ensuring compatibility with Terraform's JSON output.

________________________________________________________________________________

# Work in Progress

## Installation
To install the Terraform Delta Visualize tool, use the following npm command:

``` bash
npm install -g terraform-delta-visualize #not yet implemented open 
```

## Usage
### Display Changes

```bash
terraform-delta-visualize ./path/to/terraform/plan.json #not yet implemented
```
## Creating a Terraform Plan and Outputting to JSON
To generate a Terraform plan and save it in JSON format, follow these steps:

1. Navigate to your Terraform project directory.

2. Run the following command to generate a Terraform plan:

    ``` bash
    terraform plan -out=tfplan
    ```
    This command creates a plan file named tfplan.

3. Now, convert the plan to JSON using the following command:
    ``` bash
    terraform show -json tfplan > plan.json
    ```
    This command extracts and saves the plan details in plan.json.

## Features
1. **Change Visualization**:

    Effortlessly visualize Terraform plan changes in a human-readable format, providing insights into additions, modifications, and destructions.

2. **Detailed Information**:
    
    Access detailed information about each change, including resource types, names, and attributes affected by the Terraform plan.

3. **JSON Plan Support**:
    
    The tool seamlessly processes Terraform plan files in JSON format, ensuring compatibility with Terraform's JSON output.

## Examples
``` powershell
terraform-delta-visualize ./path/to/terraform/plan.json #not yet implemented
```
## Support and Contributions
For support or contributions to the Terraform Delta Visualize, please visit our GitHub repository: [terraform-delta-visualize](https://github.com/TraderMoe/terraform-delta-visualize).

## License
This tool is distributed under the MIT License. See the [LICENSE](https://raw.githubusercontent.com/TraderMoe/terraform-delta-visualize/main/LICENSE) file for more details.

## Acknowledgments
Special thanks to the Terraform community and contributors for making the Terraform Delta Visualize possible.

Happy visualizing with Terraform Delta Visualize!