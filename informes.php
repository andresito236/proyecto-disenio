<section class="main-dashboard p-5 col-12 col-sm-8 col-md-9 col-lg-10">
    <h3 class="text-change">Registros de <?php echo isset($form_type) ? $form_type : "fuera de linea"; ?></h3>
    <article class="row d-flex">
        <div class="my-3 col-6 col-md-6 col-lg-4 pe-3">
            <div class="card bg-card">
                <div class="card-header fs-5 fw-bold">Current Balance</div>
                <div class="card-body">
                    <h5 class="card-title fs-4">L. 150,000</h5>
                    <p class="card-text">6.8%</p>
                </div>
            </div>
        </div>
        <div class="mb-3 my-3 col-6 col-md-6 col-lg-4 pe-3">
            <div class="card bg-card">
                <div class="card-header fs-5 fw-bold">Current Balance</div>
                <div class="card-body">
                    <h5 class="card-title fs-4">L. 150,000</h5>
                    <p class="card-text">6.8%</p>
                </div>
            </div>
        </div>
        <div class="my-3 col-12 col-md-12 col-lg-4">
            <div class="card bg-card">
                <div class="card-header fs-5 fw-bold">Current Balance</div>
                <div class="card-body">
                    <h5 class="card-title fs-4">L. 150,000</h5>
                    <p class="card-text">6.8%</p>
                </div>
            </div>
        </div>
    </article>
    <article class="row d-flex">
        <!-- tabla de filtrado -->
        <div class="col">
            <div class="bg-card rounded p-3">
                <div class="col-12 d-flex">
                    <div class="col-6 d-flex align-items-center px-1">
                        <h5>
                            Titulo del informe
                        </h5>
                    </div>
                    <div class="col-6 d-flex p-2 justify-content-end">
                        <div class="p-1">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Selecione el tipo de ingresos</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="p-1">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Buscar...">
                        </div>    
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="bg-card rounded p-4 h-tables-cards-2">
                    <div class="table-container-cal overflow-y-auto">
                        <table class="table table-responsive border-secondary border-top text-white bg-card">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Monto</th>
                                <th scope="col">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php   
                                    
                                    for ($i=0; $i<20; $i++){
                                        echo "
                                            <tr>
                                                <th scope='row'>1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                </tr>
                                        ";
                                    }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </article>
</section>