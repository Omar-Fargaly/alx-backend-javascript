export default function guardrail(mathFunction) {
  const qu = [];
  let val;

  try {
    val = mathFunction();
  } catch (err) {
    val = err.toString();
  }

  qu.push(val);
  qu.push('Guardrail was processed');

  return qu;
}
