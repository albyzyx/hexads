import { Web3Storage } from "web3.storage";

function getAccessToken() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkwNzllQ0UxMTAyYTdBNWFmQkYzMmVlNjM2NDBkMjIwNzI5MDkwMzQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTA3MzA4NTYzMzAsIm5hbWUiOiJpbnNjcmlwdC1kZXYifQ.__T_SdRAju6XzOrIwZr6zcG2T53oJ2WfoCI89mzsqy4";
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

function makeFileObjects(Object: any) {
  const blob = new Blob([JSON.stringify(Object)], { type: "application/json" });
  const files = new File([blob], "metadata.json");
  return files;
}
async function storeFiles(files: File) {
  const client = makeStorageClient();
  const cid = await client.put([files], {
    wrapWithDirectory: false,
  });
  console.log("stored files with cid:", cid);
  return cid;
}

export const uploadJSONToIpfs = async (Obj: any) => {
  const file = makeFileObjects(Obj);
  const cid = await storeFiles(file);
  return cid;
};
