use rand::prelude::*;
use serde_json::json;
use vercel_runtime::{run, Body, Error, Request, Response, StatusCode};

#[tokio::main]
async fn main() -> Result<(), Error> {
    run(handler).await
}

pub async fn handler(_req: Request) -> Result<Response<Body>, Error> {
    //let r = 1;
    let mut rng = rand::thread_rng();
    let r: f64 = rng.gen(); // generates a float between 0 and 1

    let res = Response::builder()
        .status(StatusCode::OK)
        .header("Content-Type", "application/json")
        .body(
            json!({
              "message": "hello from rust runtime",
              "rand": r
            })
            .to_string()
            .into(),
        )?;
    Ok(res)
}
