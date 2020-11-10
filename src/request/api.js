import app from "@/request/http"

export function aa(){
  return app({
    url:"/v2/banners",
    method:"get"
  })
}
