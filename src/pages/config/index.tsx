import { Label, useId, Input, Button } from '@fluentui/react-components'
import { useState } from 'react'

function Config() {
  const keyId = useId('api-key')
  const hostId = useId('api-host')
  const localApiKey = localStorage.getItem('openai_api_key') || undefined
  const localApiHost = localStorage.getItem('openai_api_host') || 'https://api.openai.com'
  const [apiKey] = useState(localApiKey)
  const [apiHost] = useState(localApiHost)
  const handleSubmit = () => {
    localStorage.setItem('openai_api_key', apiKey || '')
    localStorage.setItem('openai_api_host', apiHost || '')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor={keyId}>OpenAI API Key</Label>
          <Input value={apiKey} type="password" placeholder="sk-******" id={keyId} />
        </div>
        <div>
          <Label htmlFor={hostId}>OpenAI API Host</Label>
          <Input type="url" id={hostId} />
        </div>
        <Button type="submit">Save</Button>
      </form>
    </>
  )
}

export default Config
