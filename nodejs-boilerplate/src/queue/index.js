// JUST A SAMPLE
const queue = require('queue')
const q = queue()

let results = []

results = []

// add jobs using the familiar Array API
q.push((cb) => {
  results.push('two')
  cb()
})

q.push(
  (cb) => {
    results.push('four')
    cb()
  },
  (cb) => {
    results.push('five')
    cb()
  }
)

// jobs can accept a callback or return a promise
q.push(() => {
  return new Promise((resolve, reject) => {
    results.push('one')
    resolve()
  })
})

q.unshift((cb) => {
  results.push('one')
  cb()
})

q.splice(2, 0, (cb) => {
  results.push('three')
  cb()
})

// use the timeout feature to deal with jobs that
// take too long or forget to execute a callback
q.timeout = 100

q.on('timeout', (next, job) => {
  console.log('job timed out:', job.toString().replace(/\n/g, ''))
  next()
})

q.push((cb) => {
  setTimeout(() => {
    console.log('slow job finished')
    cb()
  }, 200)
})

q.push((cb) => {
  console.log('forgot to execute callback')
})

// jobs can also override the queue's timeout
// on a per-job basis
const extraSlowJob = (cb) => {
  setTimeout(() => {
    console.log('extra slow job finished')
    cb()
  }, 400)
}

extraSlowJob.timeout = 500
q.push(extraSlowJob)

// get notified when jobs complete
q.on('success', (result, job) => {
  console.log('job finished processing:', job.toString().replace(/\n/g, ''))
})

// begin processing, get notified on end / failure
q.start((err) => {
  if (err) throw err
  console.log('all done:', results)
})
