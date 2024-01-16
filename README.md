# Development

Steps to create our DataBase

1. Create DB

```

commands: docker compose up -d
```

2. Create a copy of .env.template to .env
3. Replace variables
4. Execute command `npm install`
5. Execute command `npm run dev`
6. Execute prisma commands

# Prisma commands

```
npx prisma migrate dev
npx prima generate

```

7. Execute the SEED to [create the local DB](http://localhost:3000/api/seeds)
