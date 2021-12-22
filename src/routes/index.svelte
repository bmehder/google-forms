<script>
  const log = msg => console.log(msg)

  let submitStatus

  const handleSubmit = async data => {
    submitStatus = 'submitting'

    const formData = new FormData(data.currentTarget)

    const response = await fetch('contact.json', {
      method: 'POST',
      body: formData,
    })

    const { message } = await response.json()

    submitStatus = message
  }
</script>

{#if submitStatus === 'submitting'}
  <p>Submitting...</p>
{:else if submitStatus === 'failed'}
  <p>💩 Something went wrong. :-(</p>
{:else if submitStatus === 'success'}
  <p>🔥 Form submitted.</p>
{:else}
  <header>
    <h1>Barebones Test</h1>
    <h3>Submit the form and look at the results in the Google form.</h3>
  </header>
  <main>
    <form on:submit|preventDefault={handleSubmit}>
      <div>
        <label for="name">
          Name
          <input type="text" name="name" />
        </label>
      </div>
      <div>
        <label for="email">
          Email
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </main>
{/if}

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(body) {
    height: 100vh;
    display: grid;
    place-items: center;
  }
  header {
    text-align: center;
  }
  div {
    margin: 1rem;
  }
  form {
    width: 300px;
    margin: auto;
  }
  input {
    padding: 0.5rem 1rem;
    width: 100%;
  }
</style>
