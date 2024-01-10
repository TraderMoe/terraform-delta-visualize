terraform init
terraform plan -out="plan.out"
terraform show -json plan.out > plan.json