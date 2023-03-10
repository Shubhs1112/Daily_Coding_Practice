// Given a list of intervals, merge them to get a list of non-overlapping intervals.

const mergeOverlappingIntervals = (intervals) => {
    intervals.sort((a,b) => (a[0] - b[0]));
    const result = [intervals[0]];
    
    for(let interval of intervals){
        let e1 = result[result.length - 1][1];
        let s2 = interval[0];
        let e2 = interval[1];

        if(e1 >= s2){
            result[result.length - 1][1] = Math.max(e1, e2);
        }else{
            result.push(interval);
        }
    }
    return result;

};

console.log(mergeOverlappingIntervals([[1, 2], [2, 3], [1, 4], [5, 6]]));