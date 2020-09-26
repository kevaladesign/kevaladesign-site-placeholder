#!/bin/sh

npm run clean
npm run build
aws cloudfront create-invalidation --profile KevalaDesign_Administrator --distribution-id E32334HR21Z72B --paths "/*"
aws s3 sync --profile KevalaDesign_Administrator --acl public-read --sse --delete ./public/ s3://www.kevaladesign.com
