export function onRequest(request) {
  if(!request.headers.get('EO-Client-IP')) {
    return new Response ('Missing EO-Client-IP header', { status: 400 });
  }

  return fetch(request);
}

