import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.0.104:3333'  //se estiver rodando no dispositivo é melhor rodar com o seu ip
                                    //se estiver no genymotion http://10.0.3.2:3333
})

export default api