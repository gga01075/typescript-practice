// TS 함수

// 함수의 파라미터와 반환값에 타입을 정의하는 방식
function sum (a: number, b: number): number {
  return a+b;
}

sum(10, 20);



// 함수의 옵셔널 파라미터 => 특정 파라미터를 선택적으로 쓰고싶으면 타입 앞에 물음표를 넣어주면된다
function log(a:string, b?:string) {

}

log('hello world');
log('hello ts', 'abc');


// void : 함수의 리턴이 없는 경우 
function addTodo(todo) : void {
   console.log('sdd');
   
}
