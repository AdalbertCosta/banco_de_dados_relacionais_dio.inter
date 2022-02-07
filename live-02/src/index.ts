import express from 'express'
import statusRoute from './routes/status.route'
import usersRoute from './routes/users.route'

const app = express()

//Configurações da Aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Configuração de Rotas
app.use(statusRoute)
app.use(usersRoute)

// Inicialização do Servidor
app.listen(3000, () => {
  console.log('Aplicação executada na porta 3000!')
})
