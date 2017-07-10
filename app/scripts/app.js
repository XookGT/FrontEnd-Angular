'use strict';

/**
 * @ngdoc overview
 * @name xookFrontApp
 * @description
 * # xookFrontApp
 *
 * Main module of the application.
 */
angular
  .module('xookFrontApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'pascalprecht.translate',
    'toastr',
    'ui.bootstrap',
    'angularFileUpload'
  ])
  .config(function ($routeProvider, $locationProvider, $translateProvider, $mdThemingProvider) {



    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'categories'
      })
      .when('/levels', {
        templateUrl: 'views/levels.html',
        controller: 'LevelsCtrl',
        controllerAs: 'levels'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesCtrl',
        controllerAs: 'courses'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/country', {
        templateUrl: 'views/country.html',
        controller: 'CountryCtrl',
        controllerAs: 'country'
      })
      .when('/province', {
        templateUrl: 'views/province.html',
        controller: 'ProvinceCtrl',
        controllerAs: 'province'
      })
      .otherwise({
        redirectTo: '/'
      });

    $translateProvider.translations('en', {
      'msg_welcome': 'Welcome a the X O O K family',
      'remember_welcome': 'Remember any problem you can contact us at info@xook.com.gt',
      'user_name': 'User name',
      'password': 'Password',
      'confirm': 'Confirm',
      'error_pass': 'Your password is short. 8 chars minimum',
      'error_pass_confirm': 'The password no match',
      terms_conditions: 'Terms and Conditions',


      general_conditions: '<h2>Condiciones generales Definiciones:</h2>',
      parrafo1:'- Estudiante: Persona que realiza una solicitud de servicio en Xook. <br>- Profesor: Persona que puede dictar clases de un determinado curso ya   que tiene el conocimiento. <br>- Visitantes: Personas que acceden y navegan por Xook sin solicitar un servicio.',
      
      agree:'Agree',
      noagree: 'Not agree',

      login: 'Login',
      register: 'Register',

      language_en: 'language english',
      language_es: 'language spanish',

      general_data: 'General Data',
      public_data: 'Public Data',
      name: 'Name',
      lastname: 'Lastname ',
      enter_date: 'Enter Date',
      profile: 'Profile',
      telphone: 'Telphone',
      toolTTelphone: 'Enter your home telphone number',
      address: 'Address',
      mail: 'E-mail',
      aboutYou: 'About you',
      toolTAboutYou: 'Tell us something about yourself, you school level, your academic achievement, etc.',
      contact: 'Contact Number',
      toolTContact: 'Enter you celphone number',
      location: 'Location',
      places: 'Places',
      student_Education: 'Student Education',
      toolTStudentEducaction: 'Choose tutoring level',
      school_subject: 'School Subject',
      education: 'Education',
      toolTEducation: 'Enter you title | Carrer | Professional',



      error_required: 'This is required.',
      error_length: 'The data is long',
      error_mail: 'Your email must be between 10 and 100 characters long and look like an e-mail address.',
      error_onlyNumbers: 'Only numbers',
      error_minlength:'The data is short',

      tutor_title_search: 'Select your tutoring',
      tutoring: 'Tutoring',
      tutors: 'Tutors',
      students: 'Students',

      location_title_search: 'Select yout location',
      location: 'Location',
      country: 'Country',
      province: 'Province',

      level_title_search: 'Select yout tutoring level',
      level: 'Tutoring level',
      schedule_title_search: 'Select the desired day and time',
      schedule: 'Schedule',
      day: 'Day',
      hour: 'Hour',
      search: 'Search',
      continue: 'Continue',


      categories: 'Categories',
      category: 'Category',
      categorie_name: 'Categorie Name',
      error_maxlength: 'The text is long',
      add: 'Add',
      edit: 'Edit',
      settings: 'Setting',
      remove: 'Delete',
      upload: 'Upload',
      files: 'Files',


      levels: 'Levels',
      level_name: 'Level name',
      level: 'Level',

      courses: 'Courses',
      course: 'Course',
      stars: 'Stars',
      courses_name: 'Course Name',
      description: 'Description',

      countries: 'Countries',
      country: 'Country',
      country_name: 'Country Name',

      province: 'Province',
      provinces: 'Provinces',
      province_name: 'Province Name',

      select: 'Select'


    });

    $translateProvider.translations('es', {
      'msg_welcome': 'Bienvenido a la gran familia X O O K',
      'remember_welcome': 'recuerda cualquier inconveniente comunicate con nosotros a info@xook.com.gt',
      'user_name': 'Nombre usuario',
      'password': 'Contraseña',
      'confirm': 'Confirmar',
      'error_pass': 'Tu contraseña es pequeña debe de tener 8 caracteres minimo.',
      'error_pass_confirm': 'La contraseña no coincide',
      terms_conditions: 'Terminos y Condiciones',

      general_conditions: '<h1>Condiciones generales Definiciones:</h1>',
      parrafo1:'- Estudiante: Persona que realiza una solicitud de servicio en Xook.  <br>- Profesor: Persona que puede dictar clases de un determinado curso ya   que tiene el conocimiento. <br>- Visitantes: Personas que acceden y navegan por Xook sin solicitar un servicio.',


      agree:'Deacuerdo',
      noagree: 'No Deacuerdo',      

      login: 'Iniciar',
      register: 'Registro',

      language_en: 'Idioma Ingles',
      language_es: 'Idioma Español',

      general_data: 'Datos Generales',
      public_data: 'Datos Publicos',
      name: 'Nombre',
      lastname: 'Apellido ',
      enter_date: 'Fecha Nac',
      profile: 'Perfil',
      telphone: 'Telefono',
      toolTTelphone: 'Ingrese su numero domiciliar',
      address: 'Direccion',
      mail: 'Correo',
      aboutYou: 'Acerca de Usted',
      toolTAboutYou: 'Cuentanos sobre ti, tu nivel esck,ar, tus logros academicos, etc.',
      contact: 'Numero de Contacto',
      location: 'Ubicacion',
      places: 'Lugares',
      student_Education: 'Escolaridad de Alumno',
      toolTStudentEducaction: 'Elije el nivel de tutorias',
      school_subject: 'Cursos',
      education: 'Educacion',
      toolTEducation: 'Ingrese su titulo | Carrera | Profesion',


      error_required: 'Esto es obligatorio',
      error_length: 'El dato es demasiado largo',
      error_mail: 'Su correo electrónico debe tener entre 10 y 100 caracteres y parecer una dirección de correo electrónico.',
      error_onlyNumbers: 'Solo numeros',
      error_minlength:'El dato es demasiado corto',

      tutor_title_search: 'Selecciona tu tutoria',
      tutoring: 'Tutoria',
      tutors: 'Tutores',
      students: 'Alumno',

      location_title_search: 'Selecciona tu ubicacion',
      location: 'Ubicacion',
      country: 'Pais',
      province: 'Provincia',

      level_title_search: 'Selecciona tu nivel de tutoria',
      level: 'Nivel de tutoria',
      schedule_title_search: 'Selecciona el dia y horario deseado',
      schedule: 'Horario',
      day: 'Dia',
      hour: 'Hora',
      search: 'Buscar',
      continue: 'Continuar',


      categories: 'Categorias',
      category: 'Categoria',
      categorie_name: 'Nombre de Categoria',
      error_maxlength: 'El texto es demasiado grande',
      add: 'Agregar',
      edit: 'Editar',
      settings: 'Configuracion',
      remove: 'Eliminar',
      upload: 'Cargar',
      files: 'Archivos',

      levels: 'Niveles',
      level_name: 'Nombre de Nivel Escolar',
      level: 'Nivel',

      courses: 'Cursos',
      course: 'Curso',
      stars: 'Estrellas',
      courses_name: 'Nombre de Curso',
      description: 'Descripcion',

      countries: 'Paises',
      country: 'Pais',
      country_name: 'Nombre Pais',

      provinces: 'Departamentos',
      province: 'Departamento',
      province_name: 'Province Name',

      select: 'Seleccione'
    });

    $translateProvider.preferredLanguage('en');
  })
  .run(function ($rootScope, $location, loginService) {

    $rootScope.$on('$routeChangeStart', function () {
      if (!loginService.isLoggedIn()) {
        $location.path('/login');
      } else if (loginService.isLoggedIn() && $location.path() == '/login') {
        $location.path('/');
      } else {
        if (!loginService.permission($location.path())) {
          $location.path('/');
        }
      }
    });

  });
