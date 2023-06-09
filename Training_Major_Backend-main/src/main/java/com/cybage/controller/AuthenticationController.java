package com.cybage.controller;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.cybage.entity.Users;
import com.cybage.security.JwtResponce;
import com.cybage.security.TokenProvider;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private TokenProvider jwtTokenUtil;


	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> register(@RequestBody Users loginUser) throws AuthenticationException {

		final Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						loginUser.getEmail(),
						loginUser.getPassword()
						)
				);

		SecurityContextHolder.getContext().setAuthentication(authentication);
		final String token = jwtTokenUtil.generateToken(authentication);

		UserDetails principal = (UserDetails)authentication.getPrincipal();
		Collection<? extends GrantedAuthority> authority = principal.getAuthorities();
		List<String> roles = authority.stream().map(r -> r.getAuthority()).collect(Collectors.toList());

		JwtResponce jwtResponce = new JwtResponce();
		jwtResponce.setUsername(principal.getUsername());
		jwtResponce.setRoles(roles);
		jwtResponce.setToken(token);

		return ResponseEntity.ok(jwtResponce);
	}
}
