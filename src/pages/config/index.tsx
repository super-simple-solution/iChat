import { Label, useId, Input, Button, Divider, Select, SelectProps } from '@fluentui/react-components'

// import { makeStyles, tokens, Divider } from "@fluentui/react-components";
import { useState } from 'react'
import { CHATGPT_API_MODELS } from '@const'

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

  const [form, setForm] = useState({
    openai_mode: '',
  })

  const openAiModeChange: SelectProps['onChange'] = (event, data) => {
    setForm({ ...form, openai_mode: data.value })
  }
  // TODO: each bot with each tab
  return (
    <>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <Divider appearance="brand" className="mb-4">
            ChatGPT
          </Divider>
          <div className="mb-3 flex items-center">
            <Label className="mr-4 flex w-28 justify-end" htmlFor={keyId}>
              API Key
            </Label>
            <Input className="flex-auto" value={apiKey} type="password" placeholder="sk-******" id={keyId} />
          </div>
          <div className="mb-3 flex items-center">
            <Label className="mr-4 flex w-28 justify-end" htmlFor={hostId}>
              API Host
            </Label>
            <Input className="flex-auto" type="url" id={hostId} />
          </div>
          <div className="mb-3 flex items-center">
            <Label className="mr-4 flex w-28 justify-end" htmlFor={hostId}>
              Model
            </Label>
            <Select className="flex-auto" onChange={openAiModeChange} value={form.openai_mode}>
              {CHATGPT_API_MODELS.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>
          <Divider appearance="brand" className="mb-4">
            Bing
          </Divider>
          <div className="mb-3 flex items-center">
            <Label className="mr-4 flex w-28 justify-end" htmlFor={hostId}>
              Style
            </Label>
            <Input className="flex-auto"></Input>
          </div>
          <Divider appearance="brand" className="mb-4">
            Bard
          </Divider>
          <div className="flex-xy-center mt-7">
            <Button appearance="primary">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Config
