# Crud for the Angular

## Make a service 

```bash
ng g s folder-name/service-name
```
then inside the service make a url and call the http client constructor to make api calls
```

   private apiUrl = 'https://api.restful-api.dev/';

  constructor(private http: HttpClient) {}

  also this will automatically import this  import { HttpClient } from '@angular/common/http';
```

## Calling api getting data 
first we inject the service then
we don't call in constructor we have ngOnInit()  inbuilt calls fn to handle the call before component render
```
  private productService = inject(CrudService);
 product : Phone[] = [];

 ngOnInit() {
  this.productService.getObjects().subscribe(data => {
    this.product = data;
  });
}
```
