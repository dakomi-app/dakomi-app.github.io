#!/bin/bash
BOLD=$(tput bold)
RESET=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
BLUE=$(tput setaf 4)
PURPLE=$(tput setaf 5)

SITEMAP_INDEX=("common" "seller" "product" "video" "post" "highlight" "notices" "mdpick" "weeklySeller" "weeklyStyle")

echo "${BOLD}============================================================"
echo "${PWD##*/}"
echo "============================================================${RESET}"

# regenerate sitemap
printf "\n"
echo "${BOLD}${PURPLE}🔥 Generate SEO related files 🔥${RESET}"

cd src && cd scripts && node generate-sitemap.js && node generate-robots.js
cd .. && cd ..
printf "\n"

