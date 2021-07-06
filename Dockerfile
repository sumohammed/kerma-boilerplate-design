FROM golang:1.13 AS builder
WORKDIR /go/src/gitlab.com/trivapp/app
RUN go get -d -v golang.org/x/net/html  
COPY .   /go/src/gitlab.com/trivapp/app
RUN ls -la
RUN cd app/ && CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest  
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/gitlab.com/trivapp/app/app .
CMD ["./app"]  