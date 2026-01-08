const url_BASE = "http://localhost:3000";

const api = {
  async buscarPensamentos() {
    try {
      //usando fetch
      const response = await fetch(`${url_BASE}/pensamentos`);
      return await response.json();
      //usando axios
      //axios.get = pegar os dados
      //axios.post = enviar os dados
      //axios.put = atualizar os dados
      //const response = await axios.get(`${url_BASE}/pensamentos`);
      //return await response.data;
    } catch {
      alert("Ocorreu um erro ao buscar os pensamentos");
      throw new Error("Ocorreu um erro ao buscar os pensamentos");
    }
  },

  async salvarPensamento(pensamento) {
    try {
      //const response = await axios.post(`${url_BASE}/pensamentos` usando o metodo post do axios não precisa codar o metodo post do fetch q vai da linha 22 ate 27
      const response = await fetch(`${url_BASE}/pensamentos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch {
      alert("Ocorreu um erro ao salvar os pensamentos");
      throw new Error("Ocorreu um erro ao salvar os pensamentos");
    }
  },

  async buscarPensamentosPorId(id) {
    try {
      const response = await fetch(`${url_BASE}/pensamentos/${id}`);
      return await response.json();
    } catch {
      alert("Ocorreu um erro ao buscar os pensamentos");
      throw new Error("Ocorreu um erro ao buscar os pensamentos");
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await fetch(`${url_BASE}/pensamentos/${pensamento.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch {
      alert("Ocorreu um erro ao editar os pensamento");
      throw new Error("Ocorreu um erro ao editar os pensamento");
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await fetch(`${url_BASE}/pensamentos/${id}`, {
        method: "DELETE",
      });
      return await response.json();
    } catch {
      alert("Ocorreu um erro ao excluir os pensamentos");
      throw new Error("Ocorreu um erro ao excluir os pensamentos");
    }
  },
};

export default api;
