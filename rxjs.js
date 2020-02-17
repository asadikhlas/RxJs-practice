
const print = (value) => {
    let el = document.createElement('p')
    el.innerText = value
    document.body.appendChild(el)
}

// const observable = Rx.Observable.create(observer => {
//     observer.next('hello')
//     observer.next('world')
// })

// observable.subscribe(val => print(val))

// const clicks = Rx.Observable.fromEvent(document, 'click')
// clicks.subscribe(click => console.log(click))

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolved!!')
//     }, 1000)
// })

// const obsvPromise = Rx.Observable.fromPromise(promise)
// obsvPromise.subscribe(result => print(result))

//TIMER OBSERVER

// const timer = Rx.Observable.timer(1000)
// timer.subscribe(done => print('Ding !!'))

//INTERVAL OBERVER

const interval = Rx.Observable.interval(1000)
interval.subscribe(int => print(new Date().getSeconds()))