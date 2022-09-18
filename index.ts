// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.131.0/http/server.ts"


serve(async (req) => {
  // const {  fields } = JSON.parse(await req.text());
  // console.log(`Request Body: `, name ? name : "No name provided");
  console.log(`Request Body: `, await req.formData());
  return new Response(
    
    JSON.stringify({ message: "Hello World" }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    },
  )
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'








