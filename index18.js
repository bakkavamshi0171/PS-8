arr = [[1,2,3],[3,78,4],[5,6,87,2,0,45]];
for(i=0;i<arr.length;i++){
    console.log((i+1) +"st rows "+arr[i].length)
}


// WAP to print the max from every rows
arr = [[1, 2 ,3],[4 ,5 ,1],[3 ,-9, 2]];
for(i=0;i<arr.length;i++){
    c=0;
    for(j=0;j<arr[i].length;j++){
        if(c<arr[i][j]){
            c = arr[i][j]
        }
    }
    console.log((i+1) +"st rows "+ c)
}


//  WAP to print the max from every rows
rows = +prompt("enter a rows: ");
cols = +prompt("enter a cols: ");
arr =[]
for(k=0;k<rows;k++){
    temp=[]
    for(m=0;m<cols;m++){
        console.log("enter a number " + Number(k+1) + Number(m+1));
        ele = +prompt("");
        temp.push(ele)
    }
    arr.push(temp)
}
console.log(arr)
for(i=0;i<arr.length;i++){
    c=0;
    for(j=0;j<arr[i].length;j++){
        if(c<arr[i][j]){
            c = arr[i][j]
        }
    }
    console.log((i+1) +"st rows "+ c)
}


// anotherway
arr1 = [ [ 4, 5, 9 ], [ 6, 5, 10 ], [ 9, 2, 1 ] ]
let x= arr1.map(ele => "highest element in each row "+Math.max(...ele));
console.log(x);