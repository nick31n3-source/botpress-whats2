FROM botpress/server:latest

ENV BP_PORT=3000

EXPOSE 3000

CMD ["./bp"]
