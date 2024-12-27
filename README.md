# Next.js 15 - Client-Side Access of Environment Variables

This repository demonstrates a common error encountered when working with environment variables in Next.js 15 applications. The issue arises when attempting to access environment variables directly within client-side code, where the `process` global object is not available.

## Problem

The provided `about.js` file tries to access an environment variable using `process.env.MY_VARIABLE`. In a Next.js client-side environment, `process` is undefined, causing a `ReferenceError`.

## Solution

The solution involves moving the environment variable access to the server-side (API routes or getServerSideProps) and passing the required value to the client component as a prop.