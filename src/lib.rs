mod bin;

use napi::bindgen_prelude::Uint8Array;
use napi_derive::napi;

#[napi]
async fn blake3_round(data: bin::Bins, round: u32) -> Uint8Array {
  Uint8Array::new(
    async move {
      let mut hasher = blake3::Hasher::new();
      for i in data {
        hasher.update(i.as_ref());
      }

      let mut output = [0; 2048];
      for _ in 1..round {
        hasher.finalize_xof().fill(&mut output);
        hasher.update(&output);
      }

      hasher.finalize()
    }
    .await
    .as_bytes()
    .to_vec(),
  )
}
