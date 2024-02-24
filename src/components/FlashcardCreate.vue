<template>
    <div class="container">
  <div class="form-container">
    <h1>Tạo học phần mới</h1>
    <input type="text" class="input-title" placeholder="Nhập tiêu đề">
    <p>Thêm mô tả...</p>
    <textarea class="input-description" placeholder="Thêm mô tả"></textarea>

    <div class="form-row">
      <div class="col-left">
        <label for="school">Tên trường</label>
        <input type="text" class="input-school" id="school" placeholder="Nhập tên trường">
      </div>
      <div class="col-right">
        <label for="course">Khóa học</label>
        <input type="text" class="input-course" id="course" placeholder="Nhập tên khóa học">
      </div>
    </div>
  </div>
  <div class="add-vocabu-container">
  <!-- <div class="form-row">
      <div class="col-left">
        <label for="image">Hình ảnh</label>
        <input type="file" class="input-image" id="image">
      </div>
      <div class="col-right">
        <button class="btn-add-image">Thêm hình ảnh</button>
      </div>
    </div> -->

    <div class="form-row">
      <div class="col-left">
        <label for="glossary">Thuật ngữ</label>
        <input type="text" class="input-glossary" id="glossary" placeholder="Nhập thuật ngữ">
      </div>
      <div class="col-right">
        <label for="definition">Định nghĩa</label>
        <input type="text" class="input-definition" id="definition" placeholder="Nhập định nghĩa">
      </div>
      <!-- <div class="col-right">
        <button class="btn-add-image">Thêm hình ảnh</button>
      </div> -->
    </div>
 </div>

 <button style="margin: 20px 0;" class="btn-create">Tạo học phần</button>
</div>
</template>
<style scoped>
/* CSS cho container */
.container {
    width: 100%;
    margin: 10px auto;
    display: block;
    position: relative;
    top: 157px;
    left: 0;
    height: 1000px;
}

/* CSS cho form */
.form-container, .add-vocabu-container {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* CSS cho tiêu đề */
h1 {
  font-size: 24px;
  margin-top: 0;
}

/* CSS cho input */
.input-title,
.input-description,
.input-school,
.input-course,
.input-image,
.input-glossary,
.input-definition {
  width: 98%;
  max-width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}
.input-school,
.input-course,
.input-glossary,
.input-definition  {
    max-width: 95%;
    margin-right: 10px;
}

/* CSS cho textarea */
.input-description {
  height: 100px;
  min-height: 20px;
  min-width: 98%;
}
.add-vocabu-container {
    margin-top: 20px;
}
/* CSS cho form row */
.form-row {
  display: flex;
  margin-bottom: 10px;
}

/* CSS cho col-left */
.col-left {
  width: 50%;
  margin-right: 10px;
}

/* CSS cho col-right */
.col-right {
  width: 50%;
}

/* CSS cho button */

.btn-create {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

/* CSS cho button tạo học phần */
.btn-create {
  background-color: #0073b7;
  color: #fff;
}

</style>