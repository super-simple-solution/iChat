import { Label, Input, Button, Divider, Select, SelectProps } from '@fluentui/react-components'
import { useState, useEffect } from 'react'
import { CHATGPT_API_MODELS } from '@const'
import { getLocalStorage, setLocalStorage } from '@utils/storage'
import { USER_CONFIG_KEY, DEFAULT_CONFIG } from './const'
import { BingConversationStyle } from '@const'

const BING_STYLE_OPTIONS = [
  { name: 'Precise', value: BingConversationStyle.Precise },
  { name: 'Balanced', value: BingConversationStyle.Balanced },
  { name: 'Creative', value: BingConversationStyle.Creative },
]

function Config(props: any) {
  const [form, setForm] = useState(DEFAULT_CONFIG as any)

  useEffect(() => {
    const userConfig = getLocalStorage(USER_CONFIG_KEY)
    userConfig && setForm(userConfig)
  }, [])
  const handleSelectChange: SelectProps['onChange'] = (event) => {
    const target = event.target
    let [type, label] = target.id && target.id.split('_')

    const value = target.value
    const curProduct = form[type] || form.chatgpt
    setForm({ ...form, [type]: { ...curProduct, [label]: value } })
  }
  const handleInputChange = (event: { target: any }) => {
    const target = event.target
    let [type, label] = target.id && target.id.split('_')

    const value = target.value
    const curProduct = form[type] || form.chatgpt
    setForm({
      ...form,
      [type]: { ...curProduct, [label]: value },
    })
  }

  const toSave = () => {
    props.toCancel()
    setLocalStorage(USER_CONFIG_KEY, form)
  }

  // TODO: each bot with each tab
  return (
    <>
      <div className="p-4">
        <form>
          <Divider appearance="brand" className="mb-4">
            ChatGPT
          </Divider>
          <div className="mb-3 flex items-center">
            <Label className="mr-4 flex w-28 justify-end">API Key</Label>
            <Input
              size="large"
              onChange={handleInputChange}
              className="shadow-deep flex-auto "
              appearance="filled-lighter"
              value={form.chatgpt.key}
              type="password"
              placeholder="sk-******"
              id="chatgpt_key"
            />
          </div>
          <div className="mb-3 flex items-center">
            <Label className="mr-4 flex w-28 justify-end">API Host</Label>
            <Input
              size="large"
              onChange={handleInputChange}
              className="shadow-deep flex-auto "
              appearance="filled-lighter"
              value={form.chatgpt.host}
              type="url"
              id="chatgpt_host"
            />
          </div>
          <div className="mb-3 flex items-center">
            <Label className="mr-4 flex w-28 justify-end">Model</Label>
            <Select
              size="large"
              id="chatgpt_model"
              className="shadow-deep flex-auto"
              appearance="filled-lighter"
              onChange={handleSelectChange}
              value={form.chatgpt.model}
            >
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
            <Label className="mr-4 flex w-28 justify-end">Conversation style</Label>
            <Select
              size="large"
              id="bing_style"
              className="shadow-deep flex-auto"
              appearance="filled-lighter"
              onChange={handleSelectChange}
              value={form.bing.style}
            >
              {BING_STYLE_OPTIONS.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          </div>
          {/* <Divider appearance="brand" className="mb-4">
            Bard
          </Divider> */}
          <div className="flex-xy-center mt-7">
            <Button appearance="outline" className="!mr-7" onClick={props.toCancel}>
              Cancel
            </Button>
            <Button appearance="primary" className="!bg-[#4f6bed]" onClick={toSave}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Config
