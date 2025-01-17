import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:8080/api/board";

class BoardService {

  getBoards() {
    return axios.get(BOARD_API_BASE_URL);
  }

  createBoard(board) {
    console.log('-------post-------', board);
    return axios.post("http://localhost:8080/api/post", board).then(res => {
      console.log(res.data)
      window.location.href = "/board";            
  });
    
  }

  getOneBoard(id) {
    console.log('3. 상세보기페이지로 이동')
    return axios.get("http://localhost:8080/api/post" + "/" + id);
  } 

  // getOneBoard(id) {
  //   console.log('상세보기페이지로 이동')
  //   return axios.get("http://localhost:8080/api/post" + "/" + id);
  // } 

  updateBoard(id, board) {
    return axios.put("http://localhost:8080/api/post" + "/" + id, board);
  }

  deleteBoard(id) {
    console.log('글삭제 Service')
    return axios.delete("http://localhost:8080/api/post" + "/" + id)
  }


}


export default new BoardService();