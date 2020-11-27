import { createTestContext } from "./__helpers";

const ctx = createTestContext();

it("ensures that a draft can be created and published", async () => {
  const persistedData = await ctx.db.post.findMany();
  expect(persistedData).toMatchInlineSnapshot(`
 Array [
   Object {
     "body": "...",
     "id": 1,
     "published": true,
     "title": "Nexus",
   },
 ]
`);
  /*const postsResult = await ctx.client.request(
    `
    {
      posts{
        id
        title
        body
        published
      }
    }`
  );
  console.log(postsResult);
  expect(postsResult).toMatchInlineSnapshot(
    `Object {
  "posts": Array [
    Object {
      "body": null,
      "id": 1,
      "published": true,
      "title": "Hello World",
    },
  ],
}`
  );*/
  /*
  // Create a new draft
  const draftResult = await ctx.client.request(`
  mutation {
    createDraft(title: "Nexus", body: "...") {
      id
      title
      body
      published
    }
  }`);

  // Snapshot that draft add expect `published` to be false
  expect(draftResult).toMatchInlineSnapshot(`
  Object {
    "publish": Object {
      "id": 1,
      "title": "Nexus",
      "body": "...",
      "published": false,
    },
  }`);

  // Publish the previously created draft
  const publishResult = await ctx.client.request(
    `
  mutation publishDraft($draftId: Int!) {
    publish(draftId: $draftId){
      id
      title
      body
      published
    }
  }
  `,
    { draftId: draftResult.createDraft.id }
  );

  // Snapshot the published draft and expect `published` to be true
  expect(publishResult).toMatchInlineSnapshot(`
  Object {
     "publish": Object {
       "id": 1,
       "title": "Nexus",
       "body": "...",
       "published": true,
     },
   }`);*/
});
