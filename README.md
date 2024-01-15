# Development

Steps to create our DataBase

1. Create DB

```

commands: docker compose up -d
```

2. Rename the .env.template to .env
3. Replace variables
4. Execute the SEED to [create the local DB](http://localhost:3000/api/seeds)

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prima generate

```
