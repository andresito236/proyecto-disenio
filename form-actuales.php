<section class="main-dashboard p-5 col-12 col-sm-8 col-md-9 col-lg-10">
  <h3 class="text-change">Registros de <?php echo isset($form_type) ? $form_type : "fuera de linea"; ?></h3>
  <article class="row d-flex">
    <div class="my-4 col-12 col-sm-12 col-md-12 col-lg-6 pe-2">
      <div class="bg-card p-4 rounded h-tables-cards">
        <h4 class="fs-4 mb-3">Ingrese un nuevo <?php echo isset($formType) ? $formType : "fuera de linea"; ?></h4>
        <form>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Tipo de
              <?php echo isset($formType) ? $formType : "fuera de linea"; ?></label>
            <select class="form-select" aria-label="Default select example" required>
              <option selected disabled value="">Selecione tipo</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="descripcion" class="form-label">Descripcion</label>
            <textarea class="form-control" id="descripcion" rows="2" required></textarea>
          </div>
          <?php 
                        if(isset($visible) && $visible=true){
                            echo "
                                <div class='mb-3 d-flex'>
                                    <div class='col-6'>
                                        <div class='pe-2'>
                                            <label for='monto' class='form-label'>Monto</label>
                                            <input type='number' class='form-control' id='monto' aria-describedby='monto' min=1 required>
                                        </div>
                                    </div>
                                    <div class='col-6'>
                                        <div class='ps-2'>
                                            <label for='fecha' class='form-label'>Fecha prevista</label>
                                            <input type='date' class='form-control' id='fecha' aria-describedby='fecha' required>
                                        </div>
                                    </div>
                                </div>
                            ";
                        }else{
                            echo "
                                <div class='mb-3'>
                                    <label for='monto' class='form-label'>Monto</label>
                                    <input type='number' class='form-control' id='monto' aria-describedby='monto' min=1 required>
                                </div>
                            ";
                        }
                    ?>

          <div class='mb-3'>
            <label for='fecha' class='form-label'>Fecha</label>
            <input type='date' class='form-control' id='fecha' aria-describedby='fecha' required>
          </div>

          <div class="mb-3 d-flex justify-content-end">
            <button type="reset" id="btnLimpiar" class="btn btn-primary me-2">Limpiar</button>
            <button id="btnGuardar" class="btn btn-primary" data-accion="ingresar">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
    <div class="my-4 col-12 col-sm-12 col-md-12 col-lg-6">
      <div class="bg-card rounded p-4 h-tables-cards">
        <div class="table-container-cal overflow-y-auto">
          <table class="table table-responsive text-change  bg-card">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Monto</th>
                <th scope="col">Fecha</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody id="CuerpoTabla">
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
      <div class="bg-card rounded py-2 px-5">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-change fs-5">© 2023 Foraneos, Inc</span>
          </div>
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-change fs-5" href="#"><i class="fi fi-brands-whatsapp"></i></a></li>
            <li class="ms-3"><a class="text-change fs-5" href="#"><i class="fi fi-brands-linkedin"></i></a></li>
            <li class="ms-3"><a class="text-change fs-5" href="#"><i class="fi fi-brands-twitter"></i></a></li>
          </ul>
        </footer>
      </div>
    </div>
  </article>
</section>