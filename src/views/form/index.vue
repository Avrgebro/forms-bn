<template>
    <div class="min-h-screen bg-gray-100">
        <div class="w-100 bg-blue-600">
            <div class="py-4 text-center text-white font-bold">
                Proceso CLJ N01-2020-N
            </div>
        </div>
        <div class="">

            <div class="w-100 py-4 px-20">
                <div class="bg-white py-5 rounded-2xl">
                    <el-steps :active="active" align-center>
                    <el-step v-for="(section, index) in sections" v-bind:key="index" :title="section"></el-step>
                    </el-steps>
                </div>
            </div>

            <div class="w-100 py-4 px-20">
                <div class="bg-white py-5 px-20 rounded-2xl">

                    <div :hidden="active != 1" id="section-1">
                        <div>
                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Apellido Paterno</p>
                                </div>
                                <div class="col-span-3">
                                    <el-input v-model="personal.ap_pat" class=""></el-input>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Apellido Materno</p>
                                </div>
                                <div class="col-span-3">
                                    <el-input v-model="personal.ap_mat" class=""></el-input>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Nombres</p>
                                </div>
                                <div class="col-span-3">
                                    <el-input v-model="personal.nombres" class=""></el-input>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Ubicación de residencia</p>
                                </div>
                                <div class="col-span-3">
                                    <el-cascader class="w-full"
                                        v-model="personal.ubi"
                                        :options="locations"
                                        :props="{ expandTrigger: 'hover' }"
                                        ></el-cascader>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Domicilio</p>
                                </div>
                                <div class="col-span-3">
                                    <el-input v-model="personal.domi" class=""></el-input>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Fecha Nacimiento</p>
                                </div>
                                <div class="col-span-3">
                                    <el-date-picker
                                        v-model="personal.fnac"
                                        type="date"
                                        placeholder="Seleccione Fecha">
                                    </el-date-picker>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Documento</p>
                                </div>
                                <div class="col-span-3">
                                    <el-input v-model="personal.doc" class=""></el-input>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Celular</p>
                                </div>
                                <div class="col-span-3">
                                    <el-input v-model="personal.cel" class=""></el-input>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Télefono</p>
                                </div>
                                <div class="col-span-3">
                                    <el-input v-model="personal.fono" class=""></el-input>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Correo Electrónico</p>
                                </div>
                                <div class="col-span-3">
                                    <el-input v-model="personal.email" class=""></el-input>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end py-4">
                            <button @click="active = active+1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Siguiente
                            </button>
                        </div>

                    </div>

                    <div :hidden="active != 2" id="section-2">
                        <div class="py-4">
                            <el-collapse>
                                <el-collapse-item v-for="(formation, index) in formations" v-bind:key="index" :title="formation.name">
                                    <div class="px-20">

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Nivel de estudios</p>
                                            </div>
                                            <div class="col-span-3 flex flex-col">
                                                <el-select v-model="formation.nivel" placeholder="Select">
                                                    <el-option
                                                        
                                                        class="w-full"
                                                        v-for="item in studies"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Situación</p>
                                            </div>
                                            <div class="col-span-3 flex flex-col">
                                                <el-select v-model="formation.situa" placeholder="Select">
                                                    <el-option
                                                        class="w-full"
                                                        v-for="item in situations"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Nombre de la Institución</p>
                                            </div>
                                            <div class="col-span-3 flex flex-col">
                                                <el-input v-model="formation.insti" class=""></el-input>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Especialidad / Profesión</p>
                                            </div>
                                            <div class="col-span-3">
                                                <el-input v-model="formation.profesion" class=""></el-input>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Cuenta con documentos que lo acrediten</p>
                                            </div>
                                            <div class="col-span-3 flex flex-col">
                                                <el-select v-model="formation.tienedoc" placeholder="Select">
                                                    <el-option
                                                        class="w-100"
                                                        v-for="item in sino"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                    </el-option>
                                                </el-select>
                                                <span class="text-gray-400">Podrá adjuntar su CONSTANCIA/CERTIFICADO como parte de su Hoja de Vida al final de la Ficha de Datos</span>
                                            </div>
                                        </div>

                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                        <div class="w-full bg-gray-100 rounded-2xl flex justify-center">
                            <p @click="addReg('formacion')" class="cursor-pointer text-blue-400 py-2 my-auto">+ Agregar formación</p>
                        </div>
                        <div class="flex py-4">
                            <div class="flex flex-grow">
                                <button @click="active = active-1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Regresar
                                </button>
                            </div>
                            <div class="flex flex-grow justify-end">
                                <button @click="active = active+1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </div>

                    <div :hidden="active != 3" id="section-3">
                        <div>
                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-2 flex justify-end align-center">
                                    <p class="my-auto">Cuenta con 6 años o más de experiencia laboral?</p>
                                </div>
                                <div class="col-span-3 flex flex-col">
                                    <el-select v-model="experiences.seisamas" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-2 flex justify-end align-center">
                                    <p class="my-auto">Cuenta con 3 años o más de experiencia en el puesto que postula?</p>
                                </div>
                                <div class="col-span-3 flex flex-col">
                                    <el-select v-model="experiences.tresamas" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-2 flex justify-end align-center">
                                    <p class="my-auto">Cuenta con certificado de BACHILLER de la carrera que estudió?</p>
                                </div>
                                <div class="col-span-3 flex flex-col">
                                    <el-select v-model="experiences.bachi" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-2 flex justify-end align-center">
                                    <p class="my-auto">Seleccionar la fecha de emisión de su Título y/o Bachiller</p>
                                </div>
                                <div class="col-span-3">
                                    <el-date-picker
                                        v-model="experiences.emision"
                                        type="date"
                                        placeholder="Seleccione Fecha">
                                    </el-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="py-4">
                            <el-collapse>
                                <el-collapse-item v-for="(experience, index) in experiences.list" v-bind:key="index" :title="experience.name">
                                    <div class="px-20">

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Nombre de la Empresa</p>
                                            </div>
                                            <div class="col-span-3 flex flex-col">
                                                <el-input v-model="experience.empre" class=""></el-input>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Cargo</p>
                                            </div>
                                            <div class="col-span-3 flex flex-col">
                                                <el-input v-model="experience.cargo" class=""></el-input>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Actualmente Trabajando</p>
                                            </div>
                                            <div class="col-span-3 flex flex-col">
                                                <el-select v-model="experience.actual" placeholder="Select">
                                                    <el-option
                                                        class="w-100"
                                                        v-for="item in sino"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Fecha Inicio</p>
                                            </div>
                                            <div class="col-span-3">
                                                <el-date-picker
                                                    v-model="experience.fini"
                                                    type="date"
                                                    placeholder="Seleccione Fecha">
                                                </el-date-picker>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Fecha Fin</p>
                                            </div>
                                            <div class="col-span-3">
                                                <el-date-picker
                                                    v-model="experience.ffin"
                                                    type="date"
                                                    placeholder="Seleccione Fecha">
                                                </el-date-picker>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Motivo</p>
                                            </div>
                                            <div class="col-span-3 flex flex-col">
                                                <el-select v-model="experience.motivo" placeholder="Select">
                                                    <el-option
                                                        class="w-100"
                                                        v-for="item in motives"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-4 gap-4 py-2">
                                            <div class="flex justify-end align-center">
                                                <p class="my-auto">Principales Motivos</p>
                                            </div>
                                            <div class="col-span-3 flex flex-col">
                                                <el-input type="textarea" :rows="2" v-model="experience.prinmot" class=""></el-input>
                                            </div>
                                        </div>

                                        

                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                        <div class="w-full bg-gray-100 rounded-2xl flex justify-center">
                            <p @click="addReg('experiencia')" class="cursor-pointer text-blue-400 py-2 my-auto">+ Agregar experiencia</p>
                        </div>
                        <div class="flex py-4">
                            <div class="flex flex-grow">
                                <button @click="active = active-1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Regresar
                                </button>
                            </div>
                            <div class="flex flex-grow justify-end">
                                <button @click="active = active+1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </div>

                    <div :hidden="active != 4" id="section-4">
                        <div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Conocimientos</p>
                                </div>
                                <div class="col-span-3 flex flex-col">
                                    <el-checkbox-group v-model="complement.skills">
                                        <el-checkbox v-for="(option, index) in skills" v-bind:key="index" :label="option"></el-checkbox>
                                    </el-checkbox-group>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Tiene discapacidad?</p>
                                </div>
                                <div class="col-span-3 flex flex-col">
                                    <el-select v-model="complement.disc" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Es madre joven con carga familiar?</p>
                                </div>
                                <div class="col-span-3 flex flex-col">
                                    <el-select v-model="complement.madre" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-4 gap-4 py-2">
                                <div class="flex justify-end align-center">
                                    <p class="my-auto">Es de las fuerzas armadas?</p>
                                </div>
                                <div class="col-span-3 flex flex-col">
                                    <el-select v-model="complement.ffaa" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div v-for="index in 3" v-bind:key="index">
                                <div class="grid grid-cols-4 gap-4 py-2">
                                    <div class="flex justify-end align-center">
                                        <p class="my-auto">Agencia a la que postula</p>
                                    </div>
                                    <div class="col-span-3">
                                        <el-cascader class="w-full"
                                            v-model="complement.ubi[index - 1].agencia"
                                            :options="locations"
                                            :props="{ expandTrigger: 'hover' }"
                                            ></el-cascader>
                                    </div>
                                </div>

                                <div class="grid grid-cols-4 gap-4 py-2">
                                    <div class="flex justify-end align-center">
                                        <p class="my-auto">Codigo de Agencia</p>
                                    </div>
                                    <div class="col-span-3">
                                        <el-input v-model="complement.ubi[index - 1].agcod" class=""></el-input>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="flex py-4">
                            <div class="flex flex-grow">
                                <button @click="active = active-1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Regresar
                                </button>
                            </div>
                            <div class="flex flex-grow justify-end">
                                <button @click="active = active+1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </div>

                    <div :hidden="active != 5" id="section-5">
                        <div>
                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-4 flex justify-start align-center">
                                    <p class="my-auto">Se encuentra en el registro de Deudores de Reparaciones Civiles (REDERECI)</p>
                                </div>
                                <div class="col-span-1">
                                    <el-select v-model="declaracion.deudor" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-4 flex justify-start align-center">
                                    <p class="my-auto">Se encuentra en el Registro Nacional de Detenidos y Sentenciados a Pena Privativa de la Libertad Efectiva (RENADESPPLE) - Ley N 30794</p>
                                </div>
                                <div class="col-span-1">
                                    <el-select v-model="declaracion.detenido" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-4 flex justify-start align-center">
                                    <p class="my-auto">Se encuentra en el Registro Nacional de Sanciones de Destitucion y Despido (RNSDD)</p>
                                </div>
                                <div class="col-span-1">
                                    <el-select v-model="declaracion.despido" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-4 flex justify-start align-center">
                                    <p class="my-auto">Se encuentra en el Registro de Deudores Alimentarios Morosos (REDAM) - Ley N 28970</p>
                                </div>
                                <div class="col-span-1">
                                    <el-select v-model="declaracion.alimen" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-4 flex justify-start align-center">
                                    <p class="my-auto">Se encuentra habiltado para ejercer cargo publico</p>
                                </div>
                                <div class="col-span-1">
                                    <el-select v-model="declaracion.publi" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-4 flex justify-start align-center">
                                    <p class="my-auto">Ha sido condenado con sentencia firme por los delitos de terrorismo, apologia de terrorismo y otros contenidos en la Ley N 30794</p>
                                </div>
                                <div class="col-span-1">
                                    <el-select v-model="declaracion.terror" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-4 flex justify-start align-center">
                                    <p class="my-auto">* Ley N° 26771 - Cuenta con parientes con la facultad de designar, nombrar, contratar o tengan injerencia directa o indirecta en el ingreso a laborar al Banco de la Nación (considerar hasta cuarto grado de consanguinidad: bisabuelos, abuelos, padres, hijos, hermanos, nietos, bisnietos, tíos, sobrinos, primos, sobrinos nietos; hasta segundo grado de afinidad: suegros, yernos, nueras, cuñados; y unión de hecho o convivencia).</p>
                                </div>
                                <div class="col-span-1">
                                    <el-select v-model="declaracion.pari" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-4 flex justify-start align-center">
                                    <p class="my-auto">* Ley N° 29733, de Protección de Datos Personales y su Reglamento aprobado por Decreto Supremo N° 003-2013-JUS. Autoriza el tratamiento de sus Datos Personales con fines de la presente convocatoria</p>
                                </div>
                                <div class="col-span-1">
                                    <el-select v-model="declaracion.datod" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>

                            <div class="grid grid-cols-5 gap-4 py-2">
                                <div class="col-span-4 flex justify-start align-center">
                                    <p class="my-auto">Declaro que los datos registrados en la presente ficha de postulación son fidedignos y comprobables, asumiendo la responsabilidad legal respecto a lo consignado.</p>
                                </div>
                                <div class="col-span-1">
                                    <el-select v-model="declaracion.jury" placeholder="Select">
                                        <el-option
                                            
                                            class="w-full"
                                            v-for="item in sino"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>

                        <div class="flex py-4">
                            <div class="flex flex-grow">
                                <button @click="active = active-1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Regresar
                                </button>
                            </div>
                            <div class="flex flex-grow justify-end">
                                <button @click="redirect()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            personal: {},
            complement: {
                skills:[],
                ubi:[{},{},{}]
            },
            declaracion: {},
            formations: [],
            experiences: {
                list: []
            },
            active: 1,
            sections: ['Personal', 'Educación', 'Laboral', 'Información Complementaria', 'Declaración Jurada'],
            locations:[
                {
                    value: 'peru',
                    label: 'Perú',
                    children: [
                        {
                            value: 'ancash',
                            label: 'Ancash',
                            children: [{
                                value: 'ajia',
                                label: 'Ajia',
                                children:[
                                    {
                                        value: 'ajia',
                                        label: 'Ajia'
                                    },
                                    {
                                        value: 'huacllan',
                                        label: 'Huacllan'
                                    }
                                ]
                            }]
                        },
                        {
                            value: 'callao',
                            label: 'Callao',
                            children: [{
                                value: 'callao',
                                label: 'Callao',
                                children:[
                                    {
                                        value: 'bellavista',
                                        label: 'Bellavista'
                                    },
                                    {
                                        value: 'callao',
                                        label: 'Callao'
                                    },
                                    {
                                        value: 'la punta',
                                        label: 'La Punta'
                                    },
                                    {
                                        value: 'la perla',
                                        label: 'La Perla'
                                    }
                                ]
                            }]
                        }

                    ]
                }
            ],
            studies:[
                {
                    value: 'Incompleto',
                    label: 'Incompleto'
                },
                {
                    value: 'Estudiante / en curso',
                    label: 'Estudiante / en curso'
                },
                {
                    value: 'Secundaria completa',
                    label: 'Secundaria completa'
                },
                {
                    value: 'Universitario',
                    label: 'Iniversitario'
                },
                {
                    value: 'Doctorado',
                    label: 'Doctorado'
                },
            ],
            situations:[
                {
                    value: 'situacion 1',
                    label: 'situacion 1'
                },
                {
                    value: 'situacion 2',
                    label: 'situacion 2'
                },
                {
                    value: 'situacion 3',
                    label: 'situacion 3'
                }
            ],
            sino: [
                {
                    value: true,
                    label: 'Sí'
                },
                {
                    value: false,
                    label: 'No'
                }
            ],
            motives:[
                {
                    value: 'Renuncia',
                    label: 'Renuncia'
                },
                {
                    value: 'Despido',
                    label: 'Despido'
                }
            ],
            skills:[
                'MS Word',
                'MS Excel',
                'MS PowerPoint',
                'MS Outlook'
            ]
        }
    },
    methods: {
        addReg: function(id){
            console.log(id)
            if(id == 'formacion'){
                let idx = this.formations.length + 1
                this.formations.push({
                    name: 'Registro #'+idx
                })
            }

            if(id == 'experiencia'){
                let idx = this.experiences.list.length + 1
                this.experiences.list.push({
                    name: 'Registro #'+idx
                })
            }
        },

        redirect: function(){
            this.$router.push('/thankyou')
        }
    }
}
</script>