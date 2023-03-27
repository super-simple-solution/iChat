import { Label, Input, Button, Divider, Select, SelectProps } from '@fluentui/react-components'
import { useState, useEffect } from 'react'
import { CHATGPT_API_MODELS } from '@const'

function Config() {
  const [form, setForm] = useState({
    openai: {
      key: '',
      host: 'https://api.openai.com',
      mode: '',
    },
    bing: {
      style: '',
    },
  } as any)

  useEffect(() => {
    const configData = localStorage.getItem('configData')
    configData && setForm(JSON.parse(configData))
  }, [])
  const handleSelectChange: SelectProps['onChange'] = (event, data) => {
    setForm({ ...form, openai: { ...form.openai, mode: data.value } })
  }
  const handleInputChange = (event: { target: any }) => {
    const target = event.target
    let [type, label] = target.id && target.id.split('_')

    const value = target.value
    const curProduct = form[type] || form.openai
    setForm({
      ...form,
      [type]: { ...curProduct, [label]: value },
    })
  }
  const onSubmit = () => {
    localStorage.setItem('configData', JSON.stringify(form))
  }

  // TODO: each bot with each tab
  return (
    <>
      <div className="p-4">
        <form onClick={onSubmit}>
          <Divider appearance="brand" className="mb-4">
            ChatGPT
          </Divider>
          <div className="mb-3 flex items-center">
            <Label className="mr-4 flex w-28 justify-end">API Key</Label>
            <Input
              onChange={handleInputChange}
              className="flex-auto"
              value={form.openai.key}
              type="password"
              placeholder="sk-******"
              id="openai_key"
            />
          </div>
          <div className="mb-3 flex items-center">
            <Label className="mr-4 flex w-28 justify-end">API Host</Label>
            <Input
              onChange={handleInputChange}
              className="flex-auto"
              value={form.openai.host}
              type="url"
              id="openai_host"
            />
          </div>
          <div className="mb-3 flex items-center">
            <Label className="mr-4 flex w-28 justify-end">Model</Label>
            <Select className="flex-auto" onChange={handleSelectChange} value={form.openai.mode}>
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
            <Label className="mr-4 flex w-28 justify-end">Style</Label>
            <Input onChange={handleInputChange} value={form.bing.style} id="bing_style" className="flex-auto"></Input>
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
