package br.com.springboot.samuelnfavero.springbootrestapisample.springBootRestApiSample.controller;

import br.com.springboot.samuelnfavero.springbootrestapisample.springBootRestApiSample.model.Usuario;
import br.com.springboot.samuelnfavero.springbootrestapisample.springBootRestApiSample.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Entity;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

@CrossOrigin
@RestController
public class Controller {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/person/{name}-{age}")
    public String HelloWorld(@PathVariable String name, @PathVariable int age){

        Usuario usuario = new Usuario();
        usuario.setName(name);
        usuario.setAge(age);

        usuarioRepository.save(usuario);
        return "Hello " + name + ". You have "+ age +" years!";
    }

    @GetMapping("/readall")
    @ResponseBody
    public ResponseEntity<List<Usuario>> readAll(){
        List<Usuario> usuarios =  usuarioRepository.findAll();
        return new ResponseEntity<List<Usuario>>(usuarios, HttpStatus.OK);
    }


    @PostMapping("/save")
    @ResponseBody
    public ResponseEntity<Usuario> save(@RequestBody Usuario user){
        Usuario usuario = usuarioRepository.save(user);
        return new ResponseEntity<Usuario>(usuario, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete")
    @ResponseBody
    public ResponseEntity<String> delete(@RequestParam Long userId){
        usuarioRepository.deleteById(userId);
        return new ResponseEntity<String>("Usuário deletado com sucesso", HttpStatus.OK);
    }


    @GetMapping("/findbyid/{id}")
    @ResponseBody
    public ResponseEntity<Usuario> findById(@PathVariable Long id){
         Usuario user = usuarioRepository.findById(id).get();
         return new ResponseEntity<Usuario>(user, HttpStatus.OK);
    }

    @PutMapping("/update")
    @ResponseBody
    public ResponseEntity<?> update(@RequestBody Usuario user){
        if(user.getId() == null){
            return new ResponseEntity<String>("É necessário passar o Id para atualizar o dado!", HttpStatus.OK);
        }
        Usuario usuario = usuarioRepository.save(user);
        return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
    }

    @GetMapping("/findbyname/{name}")
    @ResponseBody
    public ResponseEntity<List<Usuario>> findByName(@PathVariable String name){

        List<Usuario> user = usuarioRepository.findByName(name.toLowerCase().trim());

        return new ResponseEntity<List<Usuario>>(user, HttpStatus.OK);
    }
}
