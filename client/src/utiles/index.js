import {surpriseMePrompts} from '../constant'
import FileSaver, { saveAs } from 'file-saver';

export const getRandomUser = (prompt) => {
  const randomNumber = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomprompt = surpriseMePrompts[randomNumber]
  if (randomprompt == prompt) return getRandomUser(prompt)
  return randomprompt
}

export const downloadImage = async(id,Url) => {
  FileSaver.saveAs(Url,`download-${id}.jpg`)
}