const PI = 3.14

function diagonal(s)
{
    let d = Math.sqrt(2*s*s)
    return d
}

console.log(diagonal(9))

function triangle(s)
{
    let a = s * s * Math.sqrt(3) / 4 
    return a
}
console.log(triangle(5))
console.log(triangle(6))
console.log(triangle(7))

function cir(r)
{
    let c = 2*r*PI
    return c
}
function circle(r)
{
    let a = r*r*PI
    return a
}
console.log(cir(4))
console.log(circle(4))