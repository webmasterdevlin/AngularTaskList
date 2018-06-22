import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-test-rest",
  templateUrl: "./test-rest.component.html",
  styleUrls: ["./test-rest.component.css"]
})
export class TestRestComponent {
  form;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = fb.group({
      title: ["", Validators.required]
    });
  }

  onSubmit() {
    this.http
      .post("https://localhost:5001/api/tasks/", this.form.value)
      .subscribe();
  }
}
