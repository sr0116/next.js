export default function Greeting ( {name, age, hobby}) {
  return (
      <div>
        <h2> 안녕, 내 이름은 {name} !</h2>
        <p> 나이는 {age} 살이고,</p>
        {hobby && <p>취미는 {hobby}😊</p>}
      </div>
  );
}