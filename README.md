# CloudPano

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
- Use Node 20 (add [autoload to your .zshrc](https://stackoverflow.com/a/39519460) to load it automatically when navigating to new directories)
- Enable pnpm (run `corepack enable`)
- [Install Infisical CLI](https://infisical.com/docs/cli/overview)
- [Set up an Infisical Machine Identity](https://app.infisical.com/org/2635b221-88e8-4684-90de-15d7849b2b8d/members?selectedTab=identities)
- Login to Infisical (run `pnpm infisical:login`)
- Install dependencies (run `pnpm i`)
- Start Supabase (cd to `packages/database` and run `pnpm supabase:start`)
- Reset the database (cd to `packages/database` and run `pnpm supabase:reset`)
- Push the Prisma changes (cd to `packages/database` and run `pnpm prisma:push`)

## Deployment

## Dev practices

## Built With
- [Next.js](https://nextjs.org/) - Web framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Supabase](https://supabase.com/docs/reference/javascript/introduction) - PostgreSQL database and authentication
- [Google Cloud Storage](https://cloud.google.com/storage/docs) - Media storage
- [Stripe](https://docs.stripe.com/api) - Payment processing and account management

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/cloudpano/app.pictastic/tags).
