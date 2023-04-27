#!/bin/bash

# Get the name of the current branch
branch=$(git symbolic-ref --short HEAD)

# Check if the branch is "master" or "dev"
if [[ "$branch" == "master" || "$branch" == "dev" ]]; then
  echo "Error: Cannot push to master or dev branch"
  exit 1
fi
