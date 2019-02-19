let ary = [5,2,4,6,1,3]
function insterSort(a) {
    for(let j=1;j<a.length; j++){
        key = a[j];
        let i = j-1;
        while(i>=0&&a[i]<key) {
            let c = a[i];
            a[i] = a[i+1];
            a[i+1] = c;
            i--;    
        }
    }
    console.log(a)
}
insterSort(ary);
console.log(0b11)