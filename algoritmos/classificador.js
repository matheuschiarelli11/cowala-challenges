function sortNames(users) {
  users.sort((a, b) => {
    if (a.souEu) return -1
    if (b.souEu) return 1

    if (a.responsavel) return -1
    if (b.responsavel) return 1

    return 0
  })

  const names = []

  users.forEach(user => {
    names.push(user.nome)
  })

  return names
}

const x = [{
    souEu: false,
    responsavel: false,
    nome: 'Nome 1'
  },
  {
    souEu: false,
    responsavel: true,
    nome: 'Nome 2'
  },
  {
    souEu: false,
    responsavel: false,
    nome: 'Nome 3'
  },
  {
    souEu: true,
    responsavel: true,
    nome: 'Nome 4'
  },
]

console.log(sortNames(x))
