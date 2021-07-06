package main

import (
	"html/template"
	"log"
	"net/http"

	"github.com/sumohammed/GzipMiddleWare"
)

var temp, err = template.ParseFiles("index.html")

func main() {
	http.HandleFunc("/", index)
	http.Handle("/public/", http.FileServer(http.Dir(".")))

	// Development
	log.Println(http.ListenAndServe(":8080", new(GzipMiddleWare.MiddleWare)))

}

func index(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "text/html")

	temp.Execute(w, "")
}
